package prueba.admin.Direccion;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "direccion", uniqueConstraints = {@UniqueConstraint(columnNames = {"codigoPostal"})})
public class DirectionEntity {

    @GeneratedValue @Id
    private Long id;

    @Column(nullable = false, name = "pais")
    private String country;

    @Column(nullable = false, name = "provincia")
    private String province;

    @Column(nullable = false, name = "ciudad")
    private String city;

    @Column(nullable = false, name = "direccion")
    private String direccion;

    @Column(nullable = false, name = "codigo postal")
    private String zipCode;
}