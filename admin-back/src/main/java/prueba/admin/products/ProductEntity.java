package prueba.admin.products;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.net.URL;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "productos")
public class ProductEntity {

    @GeneratedValue @Id
    private Long id;

    @Column(name = "nombre")
    private String name;

    @Column(name = "precio")
    private int price;

    @Column(name = "descuento")
    private boolean discount;

    @Column(name = "imagen_ruta")
    private URL imgPath;

    @Column(name = "imagen-name")
    private String imgName;

    @Column(name = "categoria")
    private String category;

    private List<String> color;

    @Column(name = "talla")
    private List<String> size;

    @Column(name = "descripcion")
    private String description;

    @Column(name = "cantidad")
    private int quantity;
}
