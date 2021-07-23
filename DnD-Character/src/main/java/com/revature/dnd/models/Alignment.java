package com.revature.dnd.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "alignments")
@NoArgsConstructor
public @Data class Alignment {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int alignmentId;

	private String alignment;
}
