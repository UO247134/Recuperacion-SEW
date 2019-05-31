<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <meta name="author" content="Miguel Guimarey Lesmes"/>
                <meta name="description"
                      content="Xsl asociado de al xml cafes"/>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="../Css/estilo.css"/>
                <link rel="stylesheet" type="text/css" href="../Css/estiloXml.css"/>
            </head>
            <body>
                <h1>Productos de Cafe Destacados</h1>
                <section id="cafes">
                <main>
                    <xsl:for-each select="cafes/cafe">
                        <article>
                            <a  target="_blank">
                                <figure>
                                    <img src="{@imagen}"/>

                                    <figcaption>
                                        <p>
                                            <xsl:value-of select="nombre"/>
                                        </p>
                                        <p>
                                            <xsl:value-of select="procedencia"/>
                                        </p>
                                        <p>
                                            <xsl:value-of select="@extraccion"/>
                                        </p>
                                        <p>
                                            <xsl:value-of select="@extraccion"/>
                                        </p>
                                        <p><a rel="modal:open"> Detalles</a></p>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>

                    </xsl:for-each>
                </main>
                </section>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>