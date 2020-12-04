<?php

namespace App\Entity;

use App\Repository\TypePackageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TypePackageRepository::class)
 */
class TypePackage
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
    private $nomTypePackage;

    /**
     * @ORM\OneToMany(targetEntity=Package::class, mappedBy="typePackage")
     */
    private $package;

    public function __construct()
    {
        $this->package = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomTypePackage(): ?string
    {
        return $this->nomTypePackage;
    }

    public function setNomTypePackage(string $nomTypePackage): self
    {
        $this->nomTypePackage = $nomTypePackage;

        return $this;
    }

    /**
     * @return Collection|Package[]
     */
    public function getPackage(): Collection
    {
        return $this->package;
    }

    public function addPackage(Package $package): self
    {
        if (!$this->package->contains($package)) {
            $this->package[] = $package;
            $package->setTypePackage($this);
        }

        return $this;
    }

    public function removePackage(Package $package): self
    {
        if ($this->package->removeElement($package)) {
            // set the owning side to null (unless already changed)
            if ($package->getTypePackage() === $this) {
                $package->setTypePackage(null);
            }
        }

        return $this;
    }
}
