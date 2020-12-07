<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\TypeProprieteRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=TypeProprieteRepository::class)
 * @ApiResource
 */
class TypePropriete
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
    private $nomType;

    /**
     * @ORM\OneToMany(targetEntity=Propriete::class, mappedBy="typePropriete")
     */
    private $propriete;

    public function __construct()
    {
        $this->propriete = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomType(): ?string
    {
        return $this->nomType;
    }

    public function setNomType(string $nomType): self
    {
        $this->nomType = $nomType;

        return $this;
    }

    /**
     * @return Collection|Propriete[]
     */
    public function getPropriete(): Collection
    {
        return $this->propriete;
    }

    public function addPropriete(Propriete $propriete): self
    {
        if (!$this->propriete->contains($propriete)) {
            $this->propriete[] = $propriete;
            $propriete->setTypePropriete($this);
        }

        return $this;
    }

    public function removePropriete(Propriete $propriete): self
    {
        if ($this->propriete->removeElement($propriete)) {
            // set the owning side to null (unless already changed)
            if ($propriete->getTypePropriete() === $this) {
                $propriete->setTypePropriete(null);
            }
        }

        return $this;
    }
}
