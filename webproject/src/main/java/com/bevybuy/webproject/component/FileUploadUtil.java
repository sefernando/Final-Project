package com.bevybuy.webproject.component;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FileUploadUtil {

    public static void saveFile(String uploadDir,
                                String fn1, String fn2, String fn3,
                                MultipartFile mpf1, MultipartFile mpf2, MultipartFile mpf3) throws IOException {

        Path uploadPath = Paths.get(uploadDir);

        try (InputStream inputStream = mpf1.getInputStream()) {

            Path filePath1 = uploadPath.resolve(fn1);
            Path filePath2 = uploadPath.resolve(fn2);
            Path filePath3 = uploadPath.resolve(fn3);

            Files.copy(inputStream, filePath1, StandardCopyOption.REPLACE_EXISTING);
            Files.copy(inputStream, filePath2, StandardCopyOption.REPLACE_EXISTING);
            Files.copy(inputStream, filePath3, StandardCopyOption.REPLACE_EXISTING);

        } catch (IOException ioe) {
            throw new IOException("Could not save one of the image files: " + fn1 + fn2 + fn3, ioe);
        }
    }
}


