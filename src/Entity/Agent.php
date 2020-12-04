<?php

namespace App\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AgentRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=AgentRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
class Agent
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
    private $nomAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $acredAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adrAgent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $boitePostAgent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $courielAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $telAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $coteAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $photoAgent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $requeteAgent;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateInscAgent;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateResilAgent;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="agent")
     */
    private $factures;

    /**
     * @ORM\OneToMany(targetEntity=Package::class, mappedBy="agent")
     */
    private $packages;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $agentEmail;

    /**
     * @ORM\OneToMany(targetEntity=Propriete::class, mappedBy="agent")
     */
    private $proprietes;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $statutAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slugAgent;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="agent")
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
        if (empty($this->slugAgent)) {
            $slugify = new Slugify();
            $this->slugAgent = $slugify->slugify($this->prenAgent);
        }
    }

    public function __construct()
    {
        $this->factures = new ArrayCollection();
        $this->packages = new ArrayCollection();
        $this->proprietes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomAgent(): ?string
    {
        return $this->nomAgent;
    }

    public function setNomAgent(string $nomAgent): self
    {
        $this->nomAgent = $nomAgent;

        return $this;
    }

    public function getAcredAgent(): ?string
    {
        return $this->acredAgent;
    }

    public function setAcredAgent(string $acredAgent): self
    {
        $this->acredAgent = $acredAgent;

        return $this;
    }

    public function getAdrAgent(): ?string
    {
        return $this->adrAgent;
    }

    public function setAdrAgent(string $adrAgent): self
    {
        $this->adrAgent = $adrAgent;

        return $this;
    }

    public function getBoitePostAgent(): ?string
    {
        return $this->boitePostAgent;
    }

    public function setBoitePostAgent(?string $boitePostAgent): self
    {
        $this->boitePostAgent = $boitePostAgent;

        return $this;
    }

    public function getCourielAgent(): ?string
    {
        return $this->courielAgent;
    }

    public function setCourielAgent(?string $courielAgent): self
    {
        $this->courielAgent = $courielAgent;

        return $this;
    }

    public function getTelAgent(): ?string
    {
        return $this->telAgent;
    }

    public function setTelAgent(string $telAgent): self
    {
        $this->telAgent = $telAgent;

        return $this;
    }

    public function getCoteAgent(): ?string
    {
        return $this->coteAgent;
    }

    public function setCoteAgent(string $coteAgent): self
    {
        $this->coteAgent = $coteAgent;

        return $this;
    }

    public function getPhotoAgent(): ?string
    {
        return $this->photoAgent;
    }

    public function setPhotoAgent(string $photoAgent): self
    {
        $this->photoAgent = $photoAgent;

        return $this;
    }

    public function getRequeteAgent(): ?string
    {
        return $this->requeteAgent;
    }

    public function setRequeteAgent(?string $requeteAgent): self
    {
        $this->requeteAgent = $requeteAgent;

        return $this;
    }

    public function getDateInscAgent(): ?\DateTimeInterface
    {
        return $this->dateInscAgent;
    }

    public function setDateInscAgent(\DateTimeInterface $dateInscAgent): self
    {
        $this->dateInscAgent = $dateInscAgent;

        return $this;
    }

    public function getDateResilAgent(): ?\DateTimeInterface
    {
        return $this->dateResilAgent;
    }

    public function setDateResilAgent(?\DateTimeInterface $dateResilAgent): self
    {
        $this->dateResilAgent = $dateResilAgent;

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
            $facture->setAgent($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getAgent() === $this) {
                $facture->setAgent(null);
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
            $package->setAgent($this);
        }

        return $this;
    }

    public function removePackage(Package $package): self
    {
        if ($this->packages->removeElement($package)) {
            // set the owning side to null (unless already changed)
            if ($package->getAgent() === $this) {
                $package->setAgent(null);
            }
        }

        return $this;
    }

    public function getPrenAgent(): ?string
    {
        return $this->prenAgent;
    }

    public function setPrenAgent(string $prenAgent): self
    {
        $this->prenAgent = $prenAgent;

        return $this;
    }

    public function getAgentEmail(): ?string
    {
        return $this->agentEmail;
    }

    public function setAgentEmail(string $agentEmail): self
    {
        $this->agentEmail = $agentEmail;

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
            $propriete->setAgent($this);
        }

        return $this;
    }

    public function removePropriete(Propriete $propriete): self
    {
        if ($this->proprietes->removeElement($propriete)) {
            // set the owning side to null (unless already changed)
            if ($propriete->getAgent() === $this) {
                $propriete->setAgent(null);
            }
        }

        return $this;
    }

    public function getStatutAgent(): ?string
    {
        return $this->statutAgent;
    }

    public function setStatutAgent(string $statutAgent): self
    {
        $this->statutAgent = $statutAgent;

        return $this;
    }

    public function getSlugAgent(): ?string
    {
        return $this->slugAgent;
    }

    public function setSlugAgent(string $slugAgent): self
    {
        $this->slugAgent = $slugAgent;

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
