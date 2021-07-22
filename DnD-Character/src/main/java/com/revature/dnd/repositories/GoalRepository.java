package com.revature.dnd.repositories;

import com.revature.dnd.models.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Integer> {


}
