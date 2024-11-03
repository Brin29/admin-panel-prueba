package prueba.admin.service.impl;

import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import prueba.admin.products.ProductEntity;
import prueba.admin.products.ProductRepository;
import prueba.admin.service.IS3Service;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.io.IOException;
import java.net.URL;

@Service
public class S3ServiceImpl implements IS3Service {

    @Autowired
    private final S3Client s3Client;


    public S3ServiceImpl(S3Client s3Client){
        this.s3Client = s3Client;
    }

    public URL uploadFile(MultipartFile file) throws IOException {

        String fileName = file.getOriginalFilename();
        String bucketName = "almacenamiento-img-rame-prueba";

        PutObjectRequest putObjectRequest = PutObjectRequest
                .builder()
                .bucket(bucketName)
                .key(fileName)
                .build();

        URL imageUrl = s3Client.utilities().getUrl(GetUrlRequest
                .builder()
                .bucket(bucketName)
                .key(fileName)
                .build());

        s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

        return imageUrl;
    }

    public URL updateFile(MultipartFile file, String prevFileName) throws IOException{
        try{
            String newFileName = file.getOriginalFilename();
            deleteFile(prevFileName);

            PutObjectRequest putObjectRequest = PutObjectRequest
                    .builder()
                    .bucket("almacenamiento-img-rame-prueba")
                    .key(newFileName)
                    .build();

            URL imageUrl = s3Client.utilities().getUrl(GetUrlRequest
                    .builder()
                    .bucket("almacenamiento-img-rame-prueba")
                    .key(newFileName)
                    .build());

            s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

            return imageUrl;
        }
        catch (S3Exception e){
            throw new IOException(e.getMessage());
        }
    }

    public String deleteFile(String fileName) throws IOException{
      try{
          DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                  .bucket("almacenamiento-img-rame-prueba")
                  .key(fileName)
                  .build();

          s3Client.deleteObject(deleteObjectRequest);

          return "Archivo borrado correctamente";
      }

      catch (S3Exception e){
          throw new IOException(e.getMessage());
      }
    }

    private boolean doesObjectExist(String objectKey) throws IOException{
        try{
            HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                    .bucket("almacenamiento-img-rame-prueba")
                    .key(objectKey)
                    .build();
            s3Client.headObject(headObjectRequest);
        }
        catch (S3Exception e){
            if(e.statusCode() == 404){
                return false;
            }
        }
        return true;
    }

    
}
