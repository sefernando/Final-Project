package com.bevybuy.webproject.component;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FileUploadUtil {


    public static void saveFile(String uploadDir1,
                                String fn1, String fn2, String fn3,
                                MultipartFile mpf1, MultipartFile mpf2, MultipartFile mpf3) throws IOException {

        Path uploadPath1 = Paths.get(uploadDir1);

        try (InputStream inputStream = mpf1.getInputStream()) {
            Path filePath1 = uploadPath1.resolve(fn1);
            Files.copy(inputStream, filePath1, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {
            throw new IOException("Could not save image file: " + fn1, ioe);
        }

        //todo repeat 2 more try catch for fn2 and fn3 or try to do in the same try catch

    }

}


