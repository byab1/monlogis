<?php

namespace App\Entity;

use App\Repository\PackageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PackageRepository::class)
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
     * @ORM\ManyToOne(targetEntity=Agence::class, inversedBy="packages")
     */
    private $agence;

    /**
     * @ORM\ManyToOne(targetEntity=TypePackage::class, inversedBy="package")
     */
    private $typePackage;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class, inversedBy="packages")
     */
    private $agent;

    public function __construct()
    {
        $this->agents = new ArrayCollection();
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

    public function getAgence(): ?Agence
    {
        return $this->agence;
    }

    public function setAgence(?Agence $agence): self
    {
        $this->agence = $agence;

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

    public function getAgent(): ?Agent
    {
        return $this->agent;
    }

    public function setAgent(?Agent $agent): self
    {
        $this->agent = $agent;

        return $this;
    }
}
