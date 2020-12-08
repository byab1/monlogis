<?php

namespace App\Events;

use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Agence;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Core\Security;

class AgenceUserSubscriber implements EventSubscriberInterface
{
    private $security;
    public function __construct(Security $security)
    {
        $this->security = $security;
    }
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setUserForAgence', EventPriorities::PRE_VALIDATE]
        ];
    }
    public function setUserForAgence(ViewEvent $event)
    {
        $agence = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($agence instanceof Agence && $method === "POST") {
            //Choper l'user actuellement connecté

            $user = $this->security->getUser();

            //Assigner l'utilisateur connecté au client qu'on est en train de créer
            $agence->setUser($user);
        }
    }
}
