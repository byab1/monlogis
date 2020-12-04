<?php

namespace App\Entity;

use App\Repository\CommoditeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommoditeRepository::class)
 */
class Commodite
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbPiece;

    /**
     * @ORM\Column(type="integer")
     */
    private $salleEau;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $piscine;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $panneauSol;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $garage;

    /**
     * @ORM\ManyToOne(targetEntity=Propriete::class, inversedBy="commodites")
     */
    private $propriete;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNbPiece(): ?int
    {
        return $this->nbPiece;
    }

    public function setNbPiece(int $nbPiece): self
    {
        $this->nbPiece = $nbPiece;

        return $this;
    }

    public function getSalleEau(): ?int
    {
        return $this->salleEau;
    }

    public function setSalleEau(int $salleEau): self
    {
        $this->salleEau = $salleEau;

        return $this;
    }

    public function getPiscine(): ?string
    {
        return $this->piscine;
    }

    public function setPiscine(?string $piscine): self
    {
        $this->piscine = $piscine;

        return $this;
    }

    public function getPanneauSol(): ?string
    {
        return $this->panneauSol;
    }

    public function setPanneauSol(?string $panneauSol): self
    {
        $this->panneauSol = $panneauSol;

        return $this;
    }

    public function getGarage(): ?string
    {
        return $this->garage;
    }

    public function setGarage(?string $garage): self
    {
        $this->garage = $garage;

        return $this;
    }

    public function getPropriete(): ?Propriete
    {
        return $this->propriete;
    }

    public function setPropriete(?Propriete $propriete): self
    {
        $this->propriete = $propriete;

        return $this;
    }
}
