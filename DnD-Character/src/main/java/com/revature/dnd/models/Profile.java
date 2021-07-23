package com.revature.dnd.models;

import com.revature.dnd.web.requestmodels.ProfileCreateDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="profiles")
@NoArgsConstructor
public @Data class Profile {

	public Profile(ProfileCreateDTO profile) {
		this.setName(profile.getName());
		this.setDesc(profile.getDesc());
		this.setStatStrength(profile.getStatStrength());
		this.setStatDexterity(profile.getStatDexterity());
		this.setStatConstitution(profile.getStatConstitution());
		this.setStatIntelligence(profile.getStatIntelligence());
		this.setStatWisdom(profile.getStatWisdom());
		this.setStatCharisma(profile.getStatCharisma());
		this.setFaction(profile.getFaction());
	}

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
