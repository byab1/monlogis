<?php

namespace App\Repository;

use App\Entity\TypePackage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TypePackage|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypePackage|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypePackage[]    findAll()
 * @method TypePackage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypePackageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypePackage::class);
    }

    // /**
    //  * @return TypePackage[] Returns an array of TypePackage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TypePackage
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
