package com.revature.dnd.services;

import com.revature.dnd.models.Alignment;
import com.revature.dnd.models.Profile;
import com.revature.dnd.repositories.AlignmentRepository;
import com.revature.dnd.repositories.ProfileRepository;
import com.revature.dnd.web.requestmodels.ProfileCreateDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final AlignmentRepository alignmentRepository;
    private final Logger logger = LoggerFactory.getLogger(ProfileService.class);

    public List<Profile> findAllProfiles() {
        return profileRepository.findAll();
    }

    public Profile createNewProfile(ProfileCreateDTO newProfile){
        Alignment alignment = alignmentRepository.findByAlignment(newProfile.getAlignment().getAlignment());
        Profile profile = new Profile(newProfile);
        profile.setAlignment(alignment);

        return profileRepository.save(profile);
    }
}
