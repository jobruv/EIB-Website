package com.eib.website.service;

import com.eib.website.model.Announcement;
import com.eib.website.model.Association;
import com.eib.website.model.Category;
import com.eib.website.repository.AnnouncementRepository;
import com.eib.website.repository.AssociationRepository;
import com.eib.website.repository.CategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional(readOnly=true)
public class WebsiteService {
    private final AnnouncementRepository announcementRepository;
    private final AssociationRepository associationRepository;
    private final CategoryRepository categoryRepository;
    public WebsiteService(AnnouncementRepository announcementRepository, AssociationRepository associationRepository, CategoryRepository categoryRepository) {
        this.announcementRepository = announcementRepository;
        this.associationRepository = associationRepository;
        this.categoryRepository = categoryRepository;
    }
    public List<Association> getAllAssociations(){
        return associationRepository.findAll();
    }
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
    public List<Announcement> getAllAnnouncements(){
        return announcementRepository.findAll();
    }

}
