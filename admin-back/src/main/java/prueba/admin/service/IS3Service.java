package prueba.admin.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URL;

public interface IS3Service {

    URL uploadFile(MultipartFile file) throws IOException;

    URL updateFile(MultipartFile file, String prevFileName) throws  IOException;

    String deleteFile(String fileName) throws IOException;
}
