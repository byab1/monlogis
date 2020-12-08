<?php

namespace App\Events;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JwtCreatedSubscriber
{
    public function updateJwtData(JWTCreatedEvent $event)
    {
        //Récupérer l'utilisateur pour avoir son nom et son prénom
        // $user = $event->getUser();

        //Enrichir les data pour qu'elle contienne ces données
        // $data =  $event->getData();

        // $data['nom'] = $user->getNom();
        // $data['prenom'] = $user->getPrenom();

        // $event->setData($data);

        // dd($event->setData($data));
    }
}
