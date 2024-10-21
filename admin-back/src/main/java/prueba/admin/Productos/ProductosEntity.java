package prueba.admin.Productos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "productos")
public class ProductosEntity {

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
