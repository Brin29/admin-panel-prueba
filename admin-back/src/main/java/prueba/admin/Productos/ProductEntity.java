package prueba.admin.Productos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private String name;

    private int price;

    private boolean discount;

    private String img;

    private String category;

    private List<String> color;

    private List<String> size;

    private String description;

    private int quantity;
}
