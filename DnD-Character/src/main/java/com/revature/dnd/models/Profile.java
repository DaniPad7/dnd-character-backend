package com.revature.dnd.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="profiles")
public class Profile {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int profileId;

	private String name;

	private String desc;

	private int statStrength;

	private int statDexterity;

	private int statConstitution;

	private int statIntelligence;

	private int statWisdom;

	private int statCharisma;

	private String faction;

	@ManyToOne(targetEntity = Alignment.class)
	private Alignment alignment;

}
