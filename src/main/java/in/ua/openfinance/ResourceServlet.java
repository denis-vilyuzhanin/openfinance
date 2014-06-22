package in.ua.openfinance;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;

public class ResourceServlet extends HttpServlet {

	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String path = req.getRequestURI();
		InputStream in = req.getServletContext().getResourceAsStream(path);
		try {
			IOUtils.copy(in, resp.getOutputStream());
		} finally {
			in.close();
		}
		
	}

	
}
