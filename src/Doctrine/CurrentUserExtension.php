<?php

namespace App\Doctrine;

use App\Entity\User;
use App\Entity\Facture;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Security\Core\Security;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryItemExtensionInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use App\Entity\Agence;

class CurrentUserExtension implements QueryCollectionExtensionInterface, QueryItemExtensionInterface
{
    private $security;
    private $auth;

    public function __construct(Security $security, AuthorizationCheckerInterface $checked)
    {
        $this->security = $security;
        $this->auth = $checked;
    }
    private function addWhere(QueryBuilder $queryBuilder, string $resourceClass)
    {
        //Obtenir l'utilsateur connecté
        $user = $this->security->getUser();
        //Si on demande des factures ou des agences alors on agit sur la requête pour qu'elle tienne compte de l'utilisateur connecté
        if (
            ($resourceClass === Agence::class || $resourceClass === Facture::class)
            &&
            !$this->auth->isGranted('ROLE_ADMIN')
            &&
            $user instanceof User
        ) {
            $rootAlias = $queryBuilder->getRootAliases()[0];

            if ($resourceClass === Agence::class) {
                $queryBuilder->andWhere("$rootAlias.user = :user");
            } else if ($resourceClass === Facture::class) {
                $queryBuilder->join("$rootAlias.agence", "c")
                    ->andWhere("c.user = :user");
            }
            $queryBuilder->setParameter("user", $user);
        }
    }
    public function applyToCollection(QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, string $operationName = null)
    {
        $this->addWhere($queryBuilder, $resourceClass);
    }
    public function applyToItem(QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, array $identifiers, string $operationName = null, array $context = [])
    {
    }
}
