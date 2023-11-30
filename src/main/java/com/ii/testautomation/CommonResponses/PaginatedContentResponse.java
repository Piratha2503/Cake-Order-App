package com.ii.testautomation.CommonResponses;

import java.util.HashMap;
import java.util.Map;

import com.ii.testautomation.CommonResponses.ContentResponses;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaginatedContentResponse<T> extends ContentResponses<T>
{
    private Map<String, T> result = new HashMap<>();

    public PaginatedContentResponse(String key, T response, String status, String statusCode, String message)
    {
        super(key, response, status, statusCode, message);
        result.put(key, response);
    }

    private Pagination pagination;

    public PaginatedContentResponse(String key, T response, String status, String statusCode, String message, Pagination pagination)
    {
        super(key, response, status, statusCode, message);
        result.put(key, response);
        this.pagination = pagination;
    }

    @Getter
    @Setter
    public static class Pagination
    {
        public Pagination(Integer pageNumber, Integer pageSize, Integer totalPages, Long totalRecords)
        {
            this.pageNumber = pageNumber;
            this.pageSize = pageSize;
            this.totalPages = totalPages;
            this.totalRecords = totalRecords;
        }

        private Integer pageNumber;
        private Integer pageSize;
        private Integer totalPages;
        private Long totalRecords;
    }
}
