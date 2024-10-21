package prueba.admin.Direccion;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class DireccionEntity {

    @GeneratedValue @Id
    private Long id;

    private String pais;

    private String departamento;

    private String ciudad;

    private String direccion;
}
