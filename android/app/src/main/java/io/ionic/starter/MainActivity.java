package io.ionic.starter;

import android.os.Bundle;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebView;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Obtén el WebView de Capacitor
        BridgeWebView webView = (BridgeWebView) this.getBridge().getWebView();

        // Cambiar user-agent para forzar versión de escritorio
        webView.getSettings().setUserAgentString(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        );
    }
}
