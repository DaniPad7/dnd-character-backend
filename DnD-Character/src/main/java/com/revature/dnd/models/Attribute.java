package com.revature.dnd.models;

import javax.persistence.*;

@Entity
@Table(name = "attributes")
public class Attribute {

	@Id
	@Column
	int attributeId;

	@ManyToOne(targetEntity = Profile.class)
	@JoinColumn(name="profiile_id")
	Profile profile;

	String attDesc;

	boolean assetFlaw;
}
