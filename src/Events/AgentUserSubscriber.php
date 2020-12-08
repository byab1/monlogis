<?php

namespace App\Events;

use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Agent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Core\Security;

class AgentUserSubscriber implements EventSubscriberInterface
{
    private $security;
    public function __construct(Security $security)
    {
        $this->security = $security;
    }
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setUserForAgent', EventPriorities::PRE_VALIDATE]
        ];
    }
    public function setUserForAgent(ViewEvent $event)
    {
        $agent = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($agent instanceof Agent && $method === "POST") {
            //Choper l'user actuellement connecté

            $user = $this->security->getUser();

            //Assigner l'utilisateur connecté au client qu'on est en train de créer
            $agent->setUser($user);
        }
    }
}
