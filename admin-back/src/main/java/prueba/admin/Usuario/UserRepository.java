package prueba.admin.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UsuarioEntity, Long> {
}
