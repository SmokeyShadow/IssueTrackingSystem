package ir.ie.internetproj.Repositories;

import ir.ie.internetproj.entities.CaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaseRepository extends JpaRepository<CaseEntity , Integer> {
}
