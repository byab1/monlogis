<?php

namespace App\Entity;

use UserProfileController;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;


/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(
 * fields={"email"},
 * message="Un utilisateur possède déjà cette adresse, veuillez la modifier !")
 * @ApiResource(
 *  normalizationContext={"groups"={"lecture_users"}},
 * itemOperations={"GET", "PUT", "DELETE", "userProfile"={"method"="get", "path"="/users/profile/{id}", "controller"="App\Controller\UserProfileController"}}
 * )
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"lecture_agence", "lecture_agent"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"lecture_agence", "lecture_agent", "lecture_users"})
     * @Assert\NotBlank(message="L'adresse email de l'utilisateur est obligatoire")
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank(message="Veuillez entrer un mot de passe !")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_agent", "lecture_users"})
     * @Assert\NotBlank(message="Le nom de l'utilisateur est obligatoire")
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_agent", "lecture_users"})
     * @Assert\NotBlank(message="Le prénom de l'utilisateur est obligatoire")
     */
    private $prenom;

    /**
     * @ORM\OneToMany(targetEntity=Agent::class, mappedBy="user")
     */
    private $agent;

    /**
     * @ORM\OneToMany(targetEntity=Agence::class, mappedBy="user")
     */
    private $agence;

    /**
     * @ORM\OneToMany(targetEntity=Propriete::class, mappedBy="user")
     */
    private $proprietes;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="user")
     */
    private $factures;

    public function __construct()
    {
        $this->agent = new ArrayCollection();
        $this->agence = new ArrayCollection();
        $this->proprietes = new ArrayCollection();
        $this->factures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * @return Collection|Agent[]
     */
    public function getAgent(): Collection
    {
        return $this->agent;
    }

    public function addAgent(Agent $agent): self
    {
        if (!$this->agent->contains($agent)) {
            $this->agent[] = $agent;
            $agent->setUser($this);
        }

        return $this;
    }

    public function removeAgent(Agent $agent): self
    {
        if ($this->agent->removeElement($agent)) {
            // set the owning side to null (unless already changed)
            if ($agent->getUser() === $this) {
                $agent->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Agence[]
     */
    public function getAgence(): Collection
    {
        return $this->agence;
    }

    public function addAgence(Agence $agence): self
    {
        if (!$this->agence->contains($agence)) {
            $this->agence[] = $agence;
            $agence->setUser($this);
        }

        return $this;
    }

    public function removeAgence(Agence $agence): self
    {
        if ($this->agence->removeElement($agence)) {
            // set the owning side to null (unless already changed)
            if ($agence->getUser() === $this) {
                $agence->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Propriete[]
     */
    public function getProprietes(): Collection
    {
        return $this->proprietes;
    }

    public function addPropriete(Propriete $propriete): self
    {
        if (!$this->proprietes->contains($propriete)) {
            $this->proprietes[] = $propriete;
            $propriete->setUser($this);
        }

        return $this;
    }

    public function removePropriete(Propriete $propriete): self
    {
        if ($this->proprietes->removeElement($propriete)) {
            // set the owning side to null (unless already changed)
            if ($propriete->getUser() === $this) {
                $propriete->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Facture[]
     */
    public function getFactures(): Collection
    {
        return $this->factures;
    }

    public function addFacture(Facture $facture): self
    {
        if (!$this->factures->contains($facture)) {
            $this->factures[] = $facture;
            $facture->setUser($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getUser() === $this) {
                $facture->setUser(null);
            }
        }

        return $this;
    }
}
