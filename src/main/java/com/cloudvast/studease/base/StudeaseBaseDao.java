/**
 * 
 */
package com.cloudvast.studease.base;

import com.cloudvast.base.BaseDao;
import com.cloudvast.base.BaseEntity;
import com.cloudvast.studease.util.Studease;
import com.cloudvast.guzz.Params;
import com.cloudvast.guzz.Query;
import com.cloudvast.pager.Pager;

import java.lang.reflect.ParameterizedType;
import java.util.List;

/**
 * StudeaseBaseDao:
 * 
 * @author 刘少平
 * @version 0.0.1
 * @since 0.0.1
 * @date 2014-2-18 下午2:43:42
 *
 */
public class StudeaseBaseDao<T extends BaseEntity> {

	protected Class<T> clazz;

	protected String className;

	protected BaseDao<T> baseDao;

	@SuppressWarnings("unchecked")
	protected StudeaseBaseDao() {
		clazz = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
		className = clazz.getName();
		baseDao = new BaseDao<>(clazz);
	}

	public T add(T entity) {
        return baseDao.add(null, entity);
    }

	public T update(T entity) {
		try {
		} catch (Exception ignore) { }
        return baseDao.update(null, entity);
    }

	public List<T> findAll() {
		String sql = "select * from @@" + className + " order by @createTime";
        return baseDao.find(null, sql, null);
    }

	public T findById(String id) {
        return baseDao.findById(null, id);
    }

	public T findByIdToUpdate(String id) {
        return baseDao.findByIdToUpdate(null, id);
    }

	public int deleteById(String id) {
        return baseDao.deleteById(null, id);
    }

	protected long count(String sql, Params params) {
        return baseDao.count(null, sql, params);
    }

	protected long countToUpdate(String sql, Params params) {
        return baseDao.countToUpdate(null, sql, params);
    }

	protected List<T> find(String sql, Params params, Pager pager) {
        return baseDao.find(null, sql, params, pager);
    }

	protected List<T> find(String sql, Params params) {
		return find(sql, params, null);
	}

	protected List<T> findToUpdate(String sql, Params params) {
        return baseDao.findToUpdate(null, sql, params);
    }

	protected List<T> findToUpdate(String sql, Params params, Pager pager) {
        return baseDao.findToUpdate(null, sql, params, pager);
    }

	protected int update(String sql, Params params) {
        return baseDao.update(null, sql, params);
    }

	public List<T> find(Query<T> query, Pager pager) {
        return baseDao.find(null, query, pager);
    }



}
