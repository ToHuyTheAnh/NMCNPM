package com.example.Project.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.example.Project.enums.Enums;
import jakarta.persistence.*;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Resident {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "apartment_id", referencedColumnName = "id")
    Apartment apartment;

    String residentName;
    @Enumerated(EnumType.STRING)
    Enums.ResidentRole role;
    String phoneNumber;
    LocalDate birthday;
    Number idNumber;
    String permanentAddress;
    String temporaryAddress;
    LocalDateTime createAt;
    LocalDateTime updateAt;

    @PrePersist
    protected void onCreate() { createAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updateAt = LocalDateTime.now();
    }
}
