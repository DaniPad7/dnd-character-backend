package com.revature.dnd.models;

import javax.persistence.*;

@Entity
@Table(name = "attributes")
public class Attribute {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int attributeId;

	@ManyToOne(targetEntity = Profile.class)
	@JoinColumn(name="profile_id")
	Profile profile;

	String attDesc;

	boolean assetFlaw;
}
