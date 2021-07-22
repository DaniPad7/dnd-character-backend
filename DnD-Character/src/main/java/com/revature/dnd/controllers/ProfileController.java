package com.revature.dnd.controllers;

import com.revature.dnd.models.Profile;
import com.revature.dnd.services.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.*;

import java.util.List;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping(value = "/all", produces = APPLICATION_JSON_VALUE)
    public List<Profile> getAllProfiles() {
        return profileService.findAllProfiles();
    }
}
