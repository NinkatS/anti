package com.example.anti.service;

import com.example.anti.file.FileStore;
import com.example.anti.form.ArticleForm;
import com.example.anti.model.Article;
import com.example.anti.model.Image;
import com.example.anti.model.User;
import com.example.anti.repository.ArticleRepository;
import com.example.anti.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final FileStore fileStore;

    public void postArticle(ArticleForm articleForm) throws IOException {
        String username = articleForm.getUsername();
        User user = userRepository.findByUsername(username);
        String text = articleForm.getText();
        Article article = new Article();
        article.setUser(user);
        article.setText(text);
        Image image = fileStore.storeFile(articleForm.getImage());
        article.setImage(image);
        articleRepository.save(article);
    }
}
