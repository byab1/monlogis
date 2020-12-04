<?php

namespace App\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=AgenceRepository::class)
 * @ORM\HasLifecycleCallbacks
 * @ApiResource
 */
class Agence
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $acreditation;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $cote;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $tel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $siteWeb;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $permisConstruire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $couriel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $boitePostal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $logo;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateInscription;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateResiliation;


    /**
     * @ORM\ManyToOne(targetEntity=Package::class, inversedBy="agence")
     */
    private $package;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="agence")
     */
    private $factures;

    /**
     * @ORM\OneToMany(targetEntity=Propriete::class, mappedBy="agence")
     */
    private $proprietes;

    /**
     * @ORM\OneToMany(targetEntity=Package::class, mappedBy="agence")
     */
    private $packages;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $agenceEmail;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slugAgence;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomAgence;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="agence")
     */
    private $user;

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

    public function getCote(): ?string
    {
        return $this->cote;
    }

    public function setCote(string $cote): self
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

    public function getPackage(): ?Package
    {
        return $this->package;
    }

    public function setPackage(?Package $package): self
    {
        $this->package = $package;

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

    /**
     * @return Collection|Package[]
     */
    public function getPackages(): Collection
    {
        return $this->packages;
    }

    public function addPackage(Package $package): self
    {
        if (!$this->packages->contains($package)) {
            $this->packages[] = $package;
            $package->setAgence($this);
        }

        return $this;
    }

    public function removePackage(Package $package): self
    {
        if ($this->packages->removeElement($package)) {
            // set the owning side to null (unless already changed)
            if ($package->getAgence() === $this) {
                $package->setAgence(null);
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
}
