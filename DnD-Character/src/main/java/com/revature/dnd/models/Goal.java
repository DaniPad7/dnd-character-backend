package com.revature.dnd.models;

import javax.persistence.*;

@Entity
@Table(name = "goals")
public class Goal {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int goalId;

	@ManyToOne(targetEntity = Profile.class)
	@JoinColumn(name="profile_id")
	Profile profile;

	String goalDesc;

	boolean completed;


}
