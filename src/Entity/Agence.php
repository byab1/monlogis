<?php

namespace App\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AgenceRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=AgenceRepository::class)
 * @ORM\HasLifecycleCallbacks
 * @UniqueEntity(
 * fields={"agenceEmail"},
 * message="Cette adresse email existe déjà, veuillez la modifier !")
 * @ApiResource(
 *  attributes={
 *      "pagination_enabled"=true,
 *       "pagination_items_per_page"=50
 * },
 * subresourceOperations={
 *  "factures_get_subresource"={"path"="/agences/{slugAgence}/{id}/factures"},
 *  "proprietes_get_subresource"={"path"="/agences/{slugAgence}/{id}/proprietes"}
 * },
 * normalizationContext={"groups"={"lecture_agence"}}
 * )
 * @ApiFilter(SearchFilter::class, properties= {"nomAgence"})
 * @ApiFilter(OrderFilter::class)
 */
class Agence
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="L'adresse de l'agence est obligatoire")
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="L'accreditation de l'agence est obligatoire")
     */
    private $acreditation;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="Le status de l'agence est obligatoire")
     * @Assert\Choice(choices={"Vérifié", "Non-vérifié"}, message="Le statur doit être Vérifié ou Non-vérifié")
     */
    private $status;

    /**
     * @ORM\Column(type="integer", length=255)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     */
    private $cote;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="Le téléphone de l'agence est obligatoire")
     */
    private $tel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     */
    private $siteWeb;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_agence"})
     */
    private $permisConstruire;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence"})
     */
    private $couriel;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence"})
     */
    private $boitePostal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_agence", "lecture_propriete"})
     */
    private $logo;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     */
    private $dateInscription;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateResiliation;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="agence")
     * @Groups({"lecture_agence"})
     * @ApiSubresource
     */
    private $factures;

    /**
     * @ORM\OneToMany(targetEntity=Propriete::class, mappedBy="agence")
     * @Groups({"lecture_agence"})
     * @ApiSubresource
     */
    private $proprietes;


    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="L'email de l'agence est obligatoire")
     * @Assert\Email(message = "L'adresse email '{{ value }}' n'est pas valide.")
     */
    private $agenceEmail;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence"})
     */
    private $slugAgence;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agence", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="Le nom de l'agence est obligatoire")
     * 
     */
    private $nomAgence;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="agence")
     * @Groups({"lecture_agence"})
     * @Assert\NotBlank(message="L'utilisateur de l'agence est obligatoire")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Package::class, inversedBy="agence")
     * @Groups({"lecture_agence"})
     * @Assert\NotBlank(message="Package de l'agence est obligatoire")
     */
    private $package;

    /**
     * Permet d'initialiser le slug !
     * 
     * @ORM\PrePersist
     * @ORM\PreUpdate
     * 
     *
     * @return void
     */
    public function initializeSlug()
    {
        if (empty($this->slugAgence)) {
            $slugify = new Slugify();
            $this->slugAgence = $slugify->slugify($this->nomAgence);
        }
    }

    public function __construct()
    {
        $this->factures = new ArrayCollection();
        $this->proprietes = new ArrayCollection();
        $this->packages = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getAcreditation(): ?string
    {
        return $this->acreditation;
    }

    public function setAcreditation(string $acreditation): self
    {
        $this->acreditation = $acreditation;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCote(): ?int
    {
        return $this->cote;
    }

    public function setCote(int $cote): self
    {
        $this->cote = $cote;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    public function getSiteWeb(): ?string
    {
        return $this->siteWeb;
    }

    public function setSiteWeb(?string $siteWeb): self
    {
        $this->siteWeb = $siteWeb;

        return $this;
    }

    public function getPermisConstruire(): ?string
    {
        return $this->permisConstruire;
    }

    public function setPermisConstruire(string $permisConstruire): self
    {
        $this->permisConstruire = $permisConstruire;

        return $this;
    }

    public function getCouriel(): ?string
    {
        return $this->couriel;
    }

    public function setCouriel(string $couriel): self
    {
        $this->couriel = $couriel;

        return $this;
    }

    public function getBoitePostal(): ?string
    {
        return $this->boitePostal;
    }

    public function setBoitePostal(string $boitePostal): self
    {
        $this->boitePostal = $boitePostal;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getDateInscription(): ?\DateTimeInterface
    {
        return $this->dateInscription;
    }

    public function setDateInscription(\DateTimeInterface $dateInscription): self
    {
        $this->dateInscription = $dateInscription;

        return $this;
    }

    public function getDateResiliation(): ?\DateTimeInterface
    {
        return $this->dateResiliation;
    }

    public function setDateResiliation(\DateTimeInterface $dateResiliation): self
    {
        $this->dateResiliation = $dateResiliation;

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
            $facture->setAgence($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getAgence() === $this) {
                $facture->setAgence(null);
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
            $propriete->setAgence($this);
        }

        return $this;
    }

    public function removePropriete(Propriete $propriete): self
    {
        if ($this->proprietes->removeElement($propriete)) {
            // set the owning side to null (unless already changed)
            if ($propriete->getAgence() === $this) {
                $propriete->setAgence(null);
            }
        }

        return $this;
    }

    public function getAgenceEmail(): ?string
    {
        return $this->agenceEmail;
    }

    public function setAgenceEmail(string $agenceEmail): self
    {
        $this->agenceEmail = $agenceEmail;

        return $this;
    }

    public function getSlugAgence(): ?string
    {
        return $this->slugAgence;
    }

    public function setSlugAgence(string $slugAgence): self
    {
        $this->slugAgence = $slugAgence;

        return $this;
    }

    public function getNomAgence(): ?string
    {
        return $this->nomAgence;
    }

    public function setNomAgence(string $nomAgence): self
    {
        $this->nomAgence = $nomAgence;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getPackage(): ?Package
    {
        return $this->package;
    }

    public function setPackage(?Package $package): self
    {
        $this->package = $package;

        return $this;
    }
}
