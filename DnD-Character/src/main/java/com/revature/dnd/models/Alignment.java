package com.revature.dnd.models;

import javax.persistence.*;

@Entity
@Table(name = "alignments")
public class Alignment {

	@Id
	@Column
	private int alignmentId;

	private String alignment;

	@OneToMany(targetEntity = Profile.class)
	@JoinColumn(name="profile_id")
	private Profile profile;
}
