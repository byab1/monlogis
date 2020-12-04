<?php

namespace App\Entity;

use App\Repository\FactureRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FactureRepository::class)
 */
class Facture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $montantFacture;

    /**
     * @ORM\Column(type="integer")
     */
    private $numFacture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $apercu;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $statutFacture;

    /**
     * @ORM\Column(type="datetime")
     */
    private $envoyeLe;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $modifieLe;

    /**
     * @ORM\ManyToOne(targetEntity=Agence::class, inversedBy="factures")
     */
    private $agence;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class, inversedBy="factures")
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMontantFacture(): ?float
    {
        return $this->montantFacture;
    }

    public function setMontantFacture(float $montantFacture): self
    {
        $this->montantFacture = $montantFacture;

        return $this;
    }

    public function getNumFacture(): ?int
    {
        return $this->numFacture;
    }

    public function setNumFacture(int $numFacture): self
    {
        $this->numFacture = $numFacture;

        return $this;
    }

    public function getApercu(): ?string
    {
        return $this->apercu;
    }

    public function setApercu(?string $apercu): self
    {
        $this->apercu = $apercu;

        return $this;
    }

    public function getStatutFacture(): ?string
    {
        return $this->statutFacture;
    }

    public function setStatutFacture(string $statutFacture): self
    {
        $this->statutFacture = $statutFacture;

        return $this;
    }

    public function getEnvoyeLe(): ?\DateTimeInterface
    {
        return $this->envoyeLe;
    }

    public function setEnvoyeLe(\DateTimeInterface $envoyeLe): self
    {
        $this->envoyeLe = $envoyeLe;

        return $this;
    }

    public function getModifieLe(): ?\DateTimeInterface
    {
        return $this->modifieLe;
    }

    public function setModifieLe(?\DateTimeInterface $modifieLe): self
    {
        $this->modifieLe = $modifieLe;

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
