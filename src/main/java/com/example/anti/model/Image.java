package com.example.anti.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Image {

    @Id
    @GeneratedValue
    @Column(name = "image_id")
    private Long id;

    @OneToOne(mappedBy = "image", fetch = FetchType.LAZY)
    private Article article;

    private String uploadFileName;
    private String storeFileName;

}
