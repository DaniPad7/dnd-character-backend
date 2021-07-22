package com.revature.dnd.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="profiles")
public class Profile {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int profileId;

	String name;

	String desc;

	int statStrength;

	int statDexterity;

	int statConstitution;

	int statIntelligence;

	int statWisdom;

	int statCharisma;

	@OneToMany(mappedBy = "profile", cascade = CascadeType.ALL)
	Set<Attribute> attributes;

	@OneToMany(mappedBy = "profile", cascade = CascadeType.ALL)
	Set<Goal> goals;

}
