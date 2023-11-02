package com.example.demo.product.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.product.mapper.ProductMapper;
import com.example.demo.product.service.ProductService;
import com.example.demo.product.vo.ProductVO;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductMapper productMapper;

	@Override
	public List<ProductVO> getProductList(String categoryId) {
		return productMapper.selectProductList(categoryId);
	}

	@Override
	public Map<String, Object> getProductDetail(ProductVO vo) {
		Map<String, Object> map = new HashMap<>();
		map.put("productDetail", productMapper.selectProductDetail(vo));
		map.put("productDetailImg", productMapper.selectProductDetailImg(vo));
		map.put("likeCheck", productMapper.likeCheck(vo));

		return map;
	}

	@Override
	public List<ProductVO> getSearchProduct(ProductVO vo) {
		return productMapper.selectSearchProduct(vo);
	}
}
