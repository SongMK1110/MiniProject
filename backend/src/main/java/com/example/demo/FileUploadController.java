package com.example.demo;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.member.service.MemberService;
import com.example.demo.member.vo.MemberVO;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @Autowired
    MemberService memberService;

    @Value("${com.example.ex8_fileupload.upload.path}")
    private String uploadPath; // application.properties의 변수

    @PostMapping("/uploadImg")
    public String handleFileUpload(@RequestParam("uploadFile") MultipartFile file, Authentication authentication) {
        if (file.isEmpty()) {
            return "파일을 선택하세요.";
        }

        try {
            // 업로드할 경로와 파일명 지정
            File dest = new File(uploadPath + File.separator +
                    file.getOriginalFilename());
            file.transferTo(dest);

            MemberVO vo = new MemberVO();
            vo.setMemberId(Integer.parseInt(authentication.getName()));
            vo.setImg(dest.getName());
            System.out.println(vo);
            memberService.modifyMypage(vo);

            System.out.println(dest.getName());

            // 파일 업로드 성공시 반환할 메시지
            return "success";
        } catch (IOException e) {
            e.printStackTrace();
            return "파일 업로드 실패: " + e.getMessage();
        }
    }
}
