<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PackageRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=PackageRepository::class)
 * @ApiResource
 */
class Package
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
    private $nomPackage;

    /**
     * @ORM\Column(type="float")
     */
    private $prixPackage;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateExpiration;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbrPropriete;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbVedetProp;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $desProp;

    /**
     * @ORM\Column(type="boolean")
     */
    private $etat;

    /**
     * @ORM\ManyToOne(targetEntity=TypePackage::class, inversedBy="package")
     */
    private $typePackage;

    /**
     * @ORM\OneToMany(targetEntity=Agence::class, mappedBy="package")
     */
    private $agence;

    /**
     * @ORM\OneToMany(targetEntity=Agent::class, mappedBy="package")
     */
    private $agent;

    public function __construct()
    {
        $this->agents = new ArrayCollection();
        $this->agence = new ArrayCollection();
        $this->agent = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomPackage(): ?string
    {
        return $this->nomPackage;
    }

    public function setNomPackage(string $nomPackage): self
    {
        $this->nomPackage = $nomPackage;

        return $this;
    }

    public function getPrixPackage(): ?float
    {
        return $this->prixPackage;
    }

    public function setPrixPackage(float $prixPackage): self
    {
        $this->prixPackage = $prixPackage;

        return $this;
    }

    public function getDateExpiration(): ?\DateTimeInterface
    {
        return $this->dateExpiration;
    }

    public function setDateExpiration(\DateTimeInterface $dateExpiration): self
    {
        $this->dateExpiration = $dateExpiration;

        return $this;
    }

    public function getNbrPropriete(): ?int
    {
        return $this->nbrPropriete;
    }

    public function setNbrPropriete(int $nbrPropriete): self
    {
        $this->nbrPropriete = $nbrPropriete;

        return $this;
    }

    public function getNbVedetProp(): ?int
    {
        return $this->nbVedetProp;
    }

    public function setNbVedetProp(int $nbVedetProp): self
    {
        $this->nbVedetProp = $nbVedetProp;

        return $this;
    }

    public function getDesProp(): ?string
    {
        return $this->desProp;
    }

    public function setDesProp(string $desProp): self
    {
        $this->desProp = $desProp;

        return $this;
    }

    public function getEtat(): ?bool
    {
        return $this->etat;
    }

    public function setEtat(bool $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getTypePackage(): ?TypePackage
    {
        return $this->typePackage;
    }

    public function setTypePackage(?TypePackage $typePackage): self
    {
        $this->typePackage = $typePackage;

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
            $agence->setPackage($this);
        }

        return $this;
    }

    public function removeAgence(Agence $agence): self
    {
        if ($this->agence->removeElement($agence)) {
            // set the owning side to null (unless already changed)
            if ($agence->getPackage() === $this) {
                $agence->setPackage(null);
            }
        }

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
            $agent->setPackage($this);
        }

        return $this;
    }

    public function removeAgent(Agent $agent): self
    {
        if ($this->agent->removeElement($agent)) {
            // set the owning side to null (unless already changed)
            if ($agent->getPackage() === $this) {
                $agent->setPackage(null);
            }
        }

        return $this;
    }
}
