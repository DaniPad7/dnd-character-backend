package com.revature.dnd.repositories;

import com.revature.dnd.models.Alignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlignmentRepository extends JpaRepository<Alignment, Integer> {

    Alignment findByAlignment(String alignment);

}
