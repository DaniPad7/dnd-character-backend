import {useEffect, useState} from "react";
import {getAllProfiles} from "../services/profile-repo";
import CharacterCard from './CharacterCard.js'
import {Container} from "react-bootstrap";


export default function CharacterCards (props) {

    async function fetchData() {
        let profile = [];
        let data = await getAllProfiles();
        for(const [key, value] of Object.entries(data)) {
            profile.push({
                id: value.profileId,
                name: value.name,
                desc: value.desc,
                statStrength: value.statStrength,
                statDexterity: value.statDexterity,
                statConstitution: value.statConstitution,
                statIntelligence: value.statIntelligence,
                statWisdom: value.statWisdom,
                statCharisma: value.statCharisma,
                faction: value.faction,
                alignment: value.alignment.alignment
            });
        }
        props.setCharacter(profile);
    }

   useEffect(  () => {
     fetchData();
   }, [])

   return(
       <>
          <Container style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {props.character.map((c, index) => (
              <CharacterCard 
                  key={index}
                  id={c.profileId}
                  alignment={c.alignment}
                  desc={c.desc}
                  faction={c.faction}
                  statCharisma={c.statCharisma}
                  statConstitution={c.statConstitution}
                  statDexterity={c.statDexterity}
                  statIntelligence={c.statIntelligence}
                  statStrength={c.statStrength}
                  statWisdom={c.statWisdom}
                  name={c.name}/>
          ))}
          </Container>
       </>
   )

}