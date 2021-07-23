package com.revature.dnd.web.requestmodels;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public @Data class ProfileCreateDTO {

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

    private AlignmentDTO alignment;

}
