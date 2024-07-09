<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Contributor
 *
 * @ORM\Table(name="contributor")
 * @ORM\Entity
 */
class Contributor
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="cin", type="integer", nullable=true)
     */
    private $cin;

    /**
     * @var int
     *
     * @ORM\Column(name="id_user", type="integer", nullable=false)
     */
    private $idUser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @var string|null
     *
     * @ORM\Column(name="cv", type="string", length=255, nullable=true)
     */
    private $cv;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Video_descriptif", type="string", length=255, nullable=true)
     */
    private $videoDescriptif;

    /**
     * @var string|null
     *
     * @ORM\Column(name="domaine", type="string", length=255, nullable=true)
     */
    private $domaine;

    /**
     * @var bool
     *
     * @ORM\Column(name="is_verified", type="boolean", nullable=true)
     */
    private $isVerified;

    /**
     * @var datetime_immutable|null
     *
     * @ORM\Column(name="date_verification", type="datetime_immutable", nullable=true)
     */
    private $dateVerification;

    /**
     * @var string|null
     *
     * @ORM\Column(name="verifier_par", type="string", length=255, nullable=true)
     */
    private $verifierPar;

    /**
     * @var int|null
     *
     * @ORM\Column(name="appartien_a_ecole", type="integer", nullable=true)
     */
    private $appartienAEcole;

    /**
     * @var string
     *
     * @ORM\Column(name="describtion_teaching_experience", type="string", length=255, nullable=true)
     */
    private $describtionTeachingExperience;

    /**
     * @var string
     *
     * @ORM\Column(name="head_line", type="string", length=255, nullable=true)
     */
    private $headLine;

    /**
     * @var string
     *
     * @ORM\Column(name="motivate_students_to_read", type="string", length=255, nullable=true)
     */
    private $motivateStudentsToRead;

    /**
     * @var string
     *
     * @ORM\Column(name="video_thumbnail", type="string", length=255, nullable=true)
     */
    private $videoThumbnail;

    /**
     * @var int
     *
     * @ORM\Column(name="years_of_experience", type="integer", nullable=true)
     */
    private $yearsOfExperience;

    /**
     * @var string
     *
     * @ORM\Column(name="matiere_enseignee", type="string", length=255, nullable=true)
     */
    private $matiereEnseignee;

    /**
     * @var string
     *
     * @ORM\Column(name="enseignement_experience", type="string", length=255, nullable=true)
     */
    private $enseignementExperience;

    /**
     * @var string
     *
     * @ORM\Column(name="id_current_situation", type="string", length=255, nullable=true)
     */
    private $idCurrentSituation;

    /**
     * @var bool
     *
     * @ORM\Column(name="receive_notifications", type="boolean", nullable=true)
     */
    private $receiveNotifications;

    /**
     * @var string
     *
     * @ORM\Column(name="preferred_age_group", type="string", length=255, nullable=true)
     */
    private $preferredAgeGroup;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Student_proficiency_level", type="string", length=255, nullable=true)
     */
    private $StudentProficiencyLevel;    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCin(): ?int
    {
        return $this->cin;
    }

    public function setCin(int $cin): self
    {
        $this->cin = $cin;

        return $this;
    }

    public function getIdUser(): ?int
    {
        return $this->idUser;
    }

    public function setIdUser(int $idUser): self
    {
        $this->idUser = $idUser;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCv(): ?string
    {
        return $this->cv;
    }

    public function setCv(?string $cv): self
    {
        $this->cv = $cv;

        return $this;
    }

    public function getVideoDescriptif(): ?string
    {
        return $this->videoDescriptif;
    }

    public function setVideoDescriptif(?string $videoDescriptif): self
    {
        $this->videoDescriptif = $videoDescriptif;

        return $this;
    }

    public function getDomaine(): ?string
    {
        return $this->domaine;
    }

    public function setDomaine(?string $domaine): self
    {
        $this->domaine = $domaine;

        return $this;
    }

    public function isIsVerified(): ?bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function getDateVerification(): ?\DateTimeImmutable
    {
        return $this->dateVerification;
    }

    public function setDateVerification(?\DateTimeImmutable $dateVerification): self
    {
        $this->dateVerification = $dateVerification;

        return $this;
    }

    public function getVerifierPar(): ?string
    {
        return $this->verifierPar;
    }

    public function setVerifierPar(?string $verifierPar): self
    {
        $this->verifierPar = $verifierPar;

        return $this;
    }

    public function getAppartienAEcole(): ?int
    {
        return $this->appartienAEcole;
    }

    public function setAppartienAEcole(?int $appartienAEcole): self
    {
        $this->appartienAEcole = $appartienAEcole;

        return $this;
    }

    public function getDescribtionTeachingExperience(): ?string
    {
        return $this->describtionTeachingExperience;
    }

    public function setDescribtionTeachingExperience(string $describtionTeachingExperience): self
    {
        $this->describtionTeachingExperience = $describtionTeachingExperience;

        return $this;
    }

    public function getHeadLine(): ?string
    {
        return $this->headLine;
    }

    public function setHeadLine(string $headLine): self
    {
        $this->headLine = $headLine;

        return $this;
    }

    public function getMotivateStudentsToRead(): ?string
    {
        return $this->motivateStudentsToRead;
    }

    public function setMotivateStudentsToRead(string $motivateStudentsToRead): self
    {
        $this->motivateStudentsToRead = $motivateStudentsToRead;

        return $this;
    }

    public function getVideoThumbnail(): ?string
    {
        return $this->videoThumbnail;
    }

    public function setVideoThumbnail(string $videoThumbnail): self
    {
        $this->videoThumbnail = $videoThumbnail;

        return $this;
    }

    public function getYearsOfExperience(): ?int
    {
        return $this->yearsOfExperience;
    }

    public function setYearsOfExperience(int $yearsOfExperience): self
    {
        $this->yearsOfExperience = $yearsOfExperience;

        return $this;
    }

    public function getMatiereEnseignee(): ?string
    {
        return $this->matiereEnseignee;
    }

    public function setMatiereEnseignee(string $matiereEnseignee): self
    {
        $this->matiereEnseignee = $matiereEnseignee;

        return $this;
    }

    public function getEnseignementExperience(): ?string
    {
        return $this->enseignementExperience;
    }

    public function setEnseignementExperience(string $enseignementExperience): self
    {
        $this->enseignementExperience = $enseignementExperience;

        return $this;
    }

    public function getIdCurrentSituation(): ?string
    {
        return $this->idCurrentSituation;
    }

    public function setIdCurrentSituation(string $idCurrentSituation): self
    {
        $this->idCurrentSituation = $idCurrentSituation;

        return $this;
    }

    public function isReceiveNotifications(): ?bool
    {
        return $this->receiveNotifications;
    }

    public function setReceiveNotifications(bool $receiveNotifications): self
    {
        $this->receiveNotifications = $receiveNotifications;

        return $this;
    }

    public function getPreferredAgeGroup(): ?string
    {
        return $this->preferredAgeGroup;
    }

    public function setPreferredAgeGroup(string $preferredAgeGroup): self
    {
        $this->preferredAgeGroup = $preferredAgeGroup;

        return $this;
    }

    public function getStudentProficiencyLevel(): ?string
    {
        return $this->StudentProficiencyLevel;
    }

    public function setStudentProficiencyLevel(string $StudentProficiencyLevel): self
    {
        $this->StudentProficiencyLevel = $StudentProficiencyLevel;

        return $this;
    }


}
