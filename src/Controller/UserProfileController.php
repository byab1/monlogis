<?php

namespace App\Controller;

use App\Entity\User;

class UserProfileController
{
    public function __invoke(User $data)
    {
        $data->setNom($data->getNom())
            ->setPrenom($data->getPrenom())
            ->setEmail($data->getEmail());

        return $data;
    }
}
