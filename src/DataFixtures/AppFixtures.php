<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Agent;
use App\Entity\Agence;
use App\Entity\Facture;
use App\Entity\Galerie;
use App\Entity\Package;
use App\Entity\Commodite;
use App\Entity\Propriete;
use App\Entity\TypePackage;
use App\Entity\TypePropriete;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $genres = ['male', 'female'];
        $users = [];

        //Création des Users
        for ($su = 0; $su < 20; $su++) {
            $user = new User();

            $hash = $this->encoder->encodePassword($user, "password");

            $user->setNom($faker->firstName())
                ->setPrenom($faker->lastName())
                ->setEmail($faker->email)
                ->setPassword($hash);

            $manager->persist($user);
            $users[] = $user;
        }
        //Création des agents
        for ($p = 1; $p < 10; $p++) {
            $agent = new Agent();

            $user = $users[mt_rand(0, count($users) - 1)];

            // $nomAgentSlug = $nomAgent '.' $nomAgence;
            $nomAgent = $faker->firstName();
            $prenAgent = $faker->lastName();

            $genre = $faker->randomElement($genres);
            $picture = 'https://randomuser.me/api/portraits/';
            $pictureId = $faker->numberBetween(1, 99) . '.jpg';

            $picture .= ($genre == 'male' ? 'men/' : 'women/') . $pictureId;

            $agent->setNomAgent($nomAgent)
                ->setPrenAgent($prenAgent)
                ->setAgentEmail($faker->email())
                ->setTelAgent($faker->e164PhoneNumber())
                ->setAcredAgent($faker->streetSuffix())
                ->setAdrAgent($faker->streetAddress())
                ->setBoitePostAgent($faker->streetAddress())
                ->setCourielAgent($faker->secondaryAddress())
                ->setCoteAgent($faker->numberBetween(2, 5))
                ->setStatutAgent($faker->randomElement(['Vérifié', 'Non-vérifié']))
                ->setPhotoAgent($picture)
                ->setUser($user)
                ->setDateInscAgent($faker->dateTimeBetween('-6 months'));

            $manager->persist($agent);
        }

        //Création des agences
        for ($i = 1; $i < 30; $i++) {
            $agence = new Agence();

            $nomAgence = $faker->company();
            $user = $users[mt_rand(0, count($users) - 1)];

            $numFacture = 1;

            $agence->setAdresse($faker->streetAddress())
                ->setNomAgence($nomAgence)
                ->setAgenceEmail($faker->email())
                ->setTel($faker->e164PhoneNumber())
                ->setAcreditation($faker->streetSuffix())
                ->setCote($faker->numberBetween(2, 5))
                ->setStatus($faker->randomElement(['Vérifié', 'Non-vérifié']))
                ->setCouriel($faker->secondaryAddress())
                ->setBoitePostal($faker->streetAddress())
                ->setUser($user)
                ->setDateInscription($faker->dateTimeBetween('-6 months'));

            $manager->persist($agence);

            //Création des factures pour les agences
            for ($j = 0; $j < mt_rand(3, 10); $j++) {
                $facture = new Facture();

                $facture->setMontantFacture($faker->randomFloat(2, 100000, 60000000))
                    ->setNumFacture($numFacture)
                    ->setAgence($agence)
                    ->setAgent($agent)
                    ->setStatutFacture($faker->randomElement(['SENT', 'PAID', 'CANCELLED']))
                    ->setEnvoyeLe($faker->dateTimeBetween('-2 months'));

                $numFacture++;
                $manager->persist($facture);
            }

            //Création des types de packages
            for ($u = 0; $u < 5; $u++) {
                $typePackage = new TypePackage();
                $typeP = ['Gratuit', 'Standard', 'Premium', 'Business', 'Sur mesure'];

                $typePackage->setNomTypePackage($faker->randomElement($typeP));
                $manager->persist($typePackage);

                //     //Création des packages
                for ($p = 0; $p < mt_rand(2, 5); $p++) {
                    $package = new Package();
                    $package->setNomPackage($faker->word())
                        ->setAgent($agent)
                        ->setAgence($agence)
                        ->setPrixPackage($faker->randomFloat(2, 500000, 70000000))
                        ->setNbrPropriete(mt_rand(1, 5))
                        ->setNbVedetProp(1)
                        ->setDesProp('<p>' . join('<p></p>', $faker->paragraphs(3)) . '</p>')
                        ->setEtat($faker->randomElement(['Disponible', 'Non-disponibel']))
                        ->setDateExpiration($faker->dateTimeBetween('-1 months'))
                        ->setTypePackage($typePackage);

                    $manager->persist($package);
                }
            }


            //Création des types de propriétés
            for ($n = 0; $n <= 8; $n++) {
                $typePropriete = new TypePropriete();

                $types = ['Villa', 'Appartement', 'Boutique', 'Maison', 'Entrepot', 'Ferme', 'Terrain', 'Lavage-auto'];

                $typePropriete->setNomType($faker->randomElement($types));
                $manager->persist($typePropriete);

                //     //Création des propriétés
                for ($k = 1; $k < mt_rand(5, 10); $k++) {
                    $propriete = new Propriete();
                    $photoPropriete = $faker->imageUrl(640, 480);

                    $propriete->setNomPropriete(($faker->streetName()))
                        ->setAgent($agent)
                        ->setAgence($agence)
                        ->setDesPropriete('<p>' . join('<p></p>', $faker->paragraphs(3)) . '</p>')
                        ->setPrixPropriete($faker->randomFloat(2, 200000, 60000000))
                        ->setAdrPropriete($faker->streetAddress())
                        ->setLocalisation($faker->city())
                        ->setDistrict($faker->city())
                        ->setVille($faker->city())
                        ->setCommune($faker->city())
                        ->setSuperficie($faker->buildingNumber() . ' m²')
                        ->setStatut($faker->randomElement(['En Vente', 'Location']))
                        ->setEtatPropriete($faker->randomElement(['Visible', 'Non visibble']))
                        ->setPhotoPropriete($photoPropriete)
                        ->setTypePropriete($typePropriete)
                        ->setDateAjout($faker->dateTimeBetween('-2 months'));

                    $manager->persist($propriete);

                    //         //Création de la Galerie d'image
                    for ($m = 1; $m <= mt_rand(2, 5); $m++) {

                        $galerie = new Galerie();

                        $galerie->setUrl($faker->imageUrl())
                            ->setCaption($faker->sentence())
                            ->setPropriete($propriete);

                        $manager->persist($galerie);
                    }

                    //         //Création des diff commodités pour une propriété
                    for ($l = 0; $l < mt_rand(2, 6); $l++) {
                        $commodite = new Commodite();

                        $commodite->setNbPiece(mt_rand(1, 5))
                            ->setSalleEau(mt_rand(1, 3))
                            ->setPiscine($faker->randomElement(['OUI', 'NON']))
                            ->setPanneauSol($faker->randomElement(['OUI', 'NON']))
                            ->setGarage($faker->randomElement(['OUI', 'NON']))
                            ->setPropriete($propriete);

                        $manager->persist($commodite);
                    }
                }
            }
        }




        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
